const { z } = require("zod");


const schema = z.object({
    title: z.string().min(3).max(15),
    status:z.optional(z.enum(["todo", "in Progress", "completed"])) 
})

export default schema




