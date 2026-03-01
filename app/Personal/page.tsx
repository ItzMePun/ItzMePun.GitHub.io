import { mono } from '@/app/ui/fonts';
import PersonalHero from '@/app/ui/personal/personal-hero';
import VolleyballSection from '@/app/ui/personal/volleyball';
import MusicSection from '@/app/ui/personal/music';
import VideoSection from '@/app/ui/personal/video';
import CADSection from '@/app/ui/personal/cad-design';
import PhotographySection from '@/app/ui/personal/photography';

export default async function Page() {
    return (
        <main className={`${mono.className}`}>
            <PersonalHero section_id='Hero'/>
            <VolleyballSection section_id='volleyball'/>
            <MusicSection section_id='music'/>
            <VideoSection section_id='video'/>
            <CADSection section_id='cad'/>
            <PhotographySection section_id='photo'/>
        </main>
    );
}