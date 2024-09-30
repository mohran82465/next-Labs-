

import { redirect } from 'next/navigation';
import './add.css'
// import { useRouter } from 'next/navigation';
import { todoModel } from '@/app/_lib/models/todos';
import { revalidatePath } from 'next/cache';

const page = () => {

    async function saveTodo(formdata) {
        "use server"
        console.log(formdata);
        const title = formdata.get("title");
        const status = formdata.get("status");

        await todoModel.create({ title, status })
        revalidatePath('/todos')
        redirect('/todos')

    }



    return (<>
        <div className='form_container'>
            <form action={saveTodo}>
                <label for="fname">Title</label>
                <input type="text" id="fname" name="title" placeholder="Your name.." />

                <label for="lname">Status</label>
                <input type="text" id="lname" name="status" placeholder="Your last name.." />



                <input type="submit" value="Submit" />
            </form>
        </div>

    </>
    )
}

export default page




