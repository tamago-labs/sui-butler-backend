import { NextRequest, NextResponse } from 'next/server';
import { type Schema } from '@/amplify/data/resource';

import {
    runWithAmplifyServerContext,
    reqResBasedClient,
} from "../../../utils/amplify-utils"

export async function GET(request: NextRequest, response: NextResponse<any>) { 

    //   const searchParams = request.nextUrl.searchParams
    //   const query = searchParams.get('query')
    //   // query is "hello" for /api/search?query=hello

    const users = await runWithAmplifyServerContext({
        nextServerContext: { request, response },
        operation: async (contextSpec) => {
            const { data: todos } = await reqResBasedClient.models.User.list(
                contextSpec
            );
            return todos;
        },
    })

    return new NextResponse(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

// export async function POST(request: NextRequest) {
//     // Parse the request body
//     const body = await request.json();
//     const { name } = body;

//     // e.g. Insert new user into your DB
//     const newUser = { id: Date.now(), name };

//     return new NextResponse(JSON.stringify(newUser), {
//         status: 201,
//         headers: { 'Content-Type': 'application/json' }
//     });
// }