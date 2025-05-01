import { NextRequest, NextResponse } from 'next/server';
import { AggregatorClient, Env } from "@cetusprotocol/aggregator-sdk";

export async function GET(request: NextRequest, response: NextResponse<any>) {

    const searchParams = request.nextUrl.searchParams
    const fromToken: any = searchParams.get('from_token')
    const toToken: any = searchParams.get('to_token')
    const amount: any = searchParams.get('amount')

    const client = new AggregatorClient({})

    const routers = await client.findRouters({
        from: fromToken,
        target: toToken,
        amount: amount,
        byAmountIn: true,
    })

    return new NextResponse(JSON.stringify({
        routers,
        outputAmount: routers?.amountOut.toString() || 0
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

}