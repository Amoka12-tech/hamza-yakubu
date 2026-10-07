import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { work } from '@/data/hamza';
import { Project } from '@/components/portfolio/Pages';
export function generateStaticParams(){return work.map(w=>({slug:w.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const w=work.find(w=>w.slug===slug);return {title:w?`${w.org} | Hamza Yakubu`:'Engagement not found',description:w?.summary}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!work.some(w=>w.slug===slug))notFound();return <Project slug={slug}/>}
