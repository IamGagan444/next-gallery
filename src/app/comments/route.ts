import { commentData } from "./data";

 
export async function GET() {
    return  Response.json(commentData)
}

export async function POST(req:Request) {
    const comments= await req.json();
    console.log("comment",comments)
    const newComment={
        id:commentData.length+1,
        comment:comments.comment
    }
    console.log("newComment,", newComment)
    commentData.push(newComment)
    
 return new Response (JSON.stringify(newComment),{
    headers:{
        "Content-Yype":"application/json"
    },
    status:201
 })


}





