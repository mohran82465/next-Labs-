import { dbConnection } from "@/app/_lib/dbConnection";
import { todoModel } from "@/app/_lib/models/todos";
import schema from "./schema";

dbConnection()

export async function GET() {
    try {
        const todos = await todoModel.find()
        return new Response(JSON.stringify({ data: todos }), { status: 200 })

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
export async function POST(request) {
    console.log(request);


    const todo = await request.json()
    const validation = schema.safeParse(todo);
    console.log(validation);
    if (!validation.success) {
        return new Response(JSON.stringify({message:validation.error.errors}),{status:400})
    }

    try {
        const newTodo = await todoModel.create(todo)
        return new Response(JSON.stringify({ data: newTodo }), { status: 201 })

    } catch (error) {

        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }

}

