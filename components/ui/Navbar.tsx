
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, signIn } from '@/auth'
import {auth} from '@/auth'
import { Button } from './button'



const Navbar = async () => {

    const session = await auth()

  return (

    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">

        <nav className="flex justify-between items-center">

            <Link href="/">
            <Image className="transition-hover duration-500 hover:scale-125 px-0.5" src="/logo.png" alt="logo" width={144} height={30}/>
            </Link>

            <div className="flex items-center gap-5">
                {session && session?.user ?(

                    <>
                    
                    <Link href="/startup/create">
                        <button className="bg-black text-white transition-all duration-500 hover:bg-black hover:scale-125 rounded px-3.5 py-1.5">
                        Post  
                        </button>
                    </Link>
                    


                    <form action={
                        async() =>{
                        "use server";
                        await signOut({redirectTo: "/"});
                    }}>
                        <button type="submit" className="bg-black text-white transition-all duration-500 hover:bg-black hover:scale-125 rounded px-1.5 py-1.5">
                        Logout
                        </button>
                    </form>
                    
                    
           

                    <Button className="bg-black px-2.5 py-2.5 text-white transition-all duration-500 hover:scale-125 hover:bg-black rounded">
                        <span>{session?.user?.name}</span>
                    </Button>

                    </>

                ) :(
                   
                    <form action={
                        async() => {
                            "use server";
                            await signIn('github')
                        }}>
                        <button className="bg-black text-white transition-all duration-500 hover:bg-black hover:scale-125 rounded px-1.5 py-1.5">
                        Login
                        </button>
                    </form>
                    
                )
            
            }
            </div>

        </nav>


    </header>
  )
}

export default Navbar