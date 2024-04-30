import { commentData } from "../data";

export function GET(request: Request, { params }: { params: { ids: string } }) {
    const mycomment = commentData.find((item) => item.id === parseInt(params.ids))

    return Response.json(mycomment)
}