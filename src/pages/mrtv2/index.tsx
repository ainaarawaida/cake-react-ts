import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { tasks } from './data/tasks'
import Counter from "./../../Counter.svelte";
import Hello from "./../../Hello.svelte";
import useStore from "./../../store";
import { useState, useRef, useLayoutEffect } from 'react'
import Example from './table'


function SvelteWrapper(Component:any) {
  return (props:any) => {
    const svelteRef:any = useRef();
    useLayoutEffect(() => {
      while (svelteRef.current?.firstChild) {
        svelteRef.current?.firstChild?.remove();
      }
      new Component({
        target: svelteRef.current,
        props,
      });
    }, []);
    return <div ref={svelteRef}></div>;
  };
}

const SvelteHello = SvelteWrapper(Hello);
const SvelteCounter = SvelteWrapper(Counter);

export default function Tasks() {
  const { count, increment } = useStore();
  const baseurl = (window as any)?.baseurl;

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='mb-2 '>
         
          <Example />

         
        </div>
      
      </LayoutBody>
    </Layout>
  )
}
