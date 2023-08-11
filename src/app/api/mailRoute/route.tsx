import { NextResponse } from 'next/server'
 
export async function POST(req: Request) {
    
    const { form } = await req.json()
   
    console.log(form)

 
 
  return NextResponse.json(form)
}