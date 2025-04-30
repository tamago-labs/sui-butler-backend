import { NextRequest, NextResponse } from 'next/server';
import { type Schema } from '@/amplify/data/resource';

import {
    runWithAmplifyServerContext,
    reqResBasedClient,
} from "../../../utils/amplify-utils"


export async function POST(request: NextRequest, response: NextResponse<any>) {
    // Parse the request body
    const body = await request.json();
    const { accessKey, toolName, params, network } = body;

    await runWithAmplifyServerContext({
        nextServerContext: { request, response },
        operation: async (contextSpec) => {
            const { data: entry } = await reqResBasedClient.models.PendingTransaction.create(
                contextSpec,
                {
                    userId: accessKey,
                    toolName,
                    params: JSON.stringify(params),
                    isCompleted: false,
                    status: "pending",
                    network
                }
            );
            return entry;
        },
    })

    return new NextResponse(JSON.stringify({
        status: "ok"
    }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}