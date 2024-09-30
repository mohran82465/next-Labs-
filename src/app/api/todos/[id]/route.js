import { todoModel } from '@/app/_lib/models/todos';
import { dbConnection } from '@/app/_lib/dbConnection';

dbConnection();

export async function GET(req, { params }) {
    try {
        // console.log(params);
        // console.log("====================");
        
        const todo = await todoModel.findById(params.id);
        if (!todo) {
            return new Response(JSON.stringify({ message: 'Todo not found' }), { status: 404 });
        }
        return new Response(JSON.stringify({ data: todo }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}

export async function generateStaticParams() {
    
    
    try {
        const todos = await todoModel.find({});
        // console.log(todos);
            
        return todos.map(todo => ({
            id: todo._id.toString(),
        }));
    } catch (error) {
        console.error('Error fetching todos for static params:', error);
        return [];
    }
}
