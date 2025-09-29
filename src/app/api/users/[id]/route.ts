import { NextRequest, NextResponse } from "next/server";
import { demo_users } from '@/app/api/users/route'


export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        if (!id) {
            throw new Error('id not found!')
        };

        const user = demo_users?.filter(user => user?.id == Number(id) as number)
        if (!user) {
            throw new Error('user not found!')
        };

        return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            error: error instanceof Error ? error?.message : 'get user fetching fail'
        })
    }
}

// delete User
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        if (!id) throw new Error('id not found!')

        const deleteUser = demo_users.find(user => user.id == Number(id) as number);
        if (!deleteUser) throw new Error('user not found!')
        return NextResponse.json({ deleteUser });
    } catch (error) {
        return NextResponse.json({
            error: error instanceof Error ? error?.message : 'delete user fetching fail'
        })
    }
}