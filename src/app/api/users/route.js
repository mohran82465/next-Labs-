import { userModel } from "@/app/_lib/models/users";
import { dbConnection } from "@/app/_lib/dbConnection";




dbConnection();

export async function GET() {
    try {
        const users = await userModel.find();
        return new Response(JSON.stringify({ data: users }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });

    }
}

export async function POST(request) {
    console.log(request);

    const user = await request.json();

    try {
        const newUser = await userModel.create(user);
        return new Response(JSON.stringify({ data: newUser }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });

    }

}





