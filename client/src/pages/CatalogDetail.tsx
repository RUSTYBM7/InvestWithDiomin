import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Doc = { slug:string; title:string; abstract:string; file_url?:string; checksum?:string; size_kb:number; format:string; topic:string; level:string; updated_at:string; version?:string; references?:{title:string;url:string}[] };

export default function CatalogDetail(){
  const { slug } = useParams();
  const [doc,setDoc]=useState<Doc|null>(null);
  useEffect(()=>{ fetch(`/api/v1/catalog/${slug}`).then(r=>r.json()).then(setDoc).catch(()=>setDoc(null)); },[slug]);
  if(!doc) return <div className="container mx-auto px-6 py-16">Loading...</div>;

  const download=async()=>{
    const r=await fetch('/api/v1/catalog/sign',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug:doc.slug})});
    const j=await r.json(); if(j?.signedUrl){ window.location.href=j.signedUrl; }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-12 md:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context':'https://schema.org',
          '@type': 'CreativeWork',
          name: doc.title,
          dateModified: doc.updated_at,
          encodingFormat: doc.format,
          version: doc.version,
          url: window.location.href,
          citation: (doc.references||[]).map(r=>r.url),
          ...(doc.file_url ? { image: { '@type': 'ImageObject', contentUrl: doc.file_url } } : {})
        })}} />
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">{doc.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{doc.abstract}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <Badge variant="outline">{doc.format}</Badge>
          <Badge variant="outline">{doc.topic}</Badge>
          <Badge variant="outline">{doc.level}</Badge>
          <span>• Updated {new Date(doc.updated_at).toLocaleDateString()}</span>
          {doc.version && <span>• v{doc.version}</span>}
          {doc.checksum && <span>• SHA-256: {doc.checksum.slice(0,12)}…</span>}
        </div>
        <div className="mt-6 flex gap-3">
          <Button onClick={download} aria-label="Download">Download</Button>
          <Button variant="outline" onClick={()=>window.print()} aria-label="Print">Print</Button>
        </div>
        <div className="mt-8 aspect-[3/4] w-full max-w-4xl">
          {doc.file_url ? (
            <iframe title={doc.title} src={doc.file_url} className="h-full w-full"/>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Preview available after setup.</div>
          )}
        </div>
        <div className="mt-10 max-w-3xl">
          <h3 className="mb-2 text-xl font-semibold">References</h3>
          {doc.references?.length ? (
            <ul className="ml-5 list-disc space-y-1 text-sm">
              {doc.references.map((r,i)=>(<li key={i}><a href={r.url} target="_blank" rel="noopener noreferrer" className="underline">{r.title}</a></li>))}
            </ul>
          ):<p className="text-sm text-muted-foreground">References will appear when available.</p>}
        </div>
      </section>
    </div>
  );
}