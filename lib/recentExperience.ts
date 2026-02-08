import fs from "node:fs/promises";
import path from "node:path";
import matter from 'gray-matter';

interface Experience {
    role: string;
    employer: string;
    startDate: string;
    endDate: string;
    summary: string;
    thumbnail: string;
    content: string;
    [key: string]: any;
}

export async function RecentExperiences(limit = 3): Promise<Experience[]> {
    const experiencePath = path.join(process.cwd(), "content", "profile", "experience");
    
    const formatDate = (dateString: string): string => {
        if (dateString === 'current') return 'Current';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-UK', { year: 'numeric', month: 'short' });
    };
    
    try {
        const files = await fs.readdir(experiencePath);

        const experiences = await Promise.all(
            files
                .filter(file => file.endsWith('.md'))
                .map(async (file) => {
                    const filePath = path.join(experiencePath, file);
                    const fileContent = await fs.readFile(filePath, 'utf8');
                    const { data, content } = matter(fileContent);
                    
                    return {
                        role: data['role'],
                        employer: data['employer'],
                        summary: data['summary'],
                        thumbnail: data['thumbnail'],
                        startDate: formatDate(data['startDate']),
                        endDate: formatDate(data['endDate']),
                        content,
                        _sortDate: data['endDate'] === 'current' ? Date.now() : new Date(data['endDate']).getTime()
                    };
                })
        );

        // console.log(experiences);
        
        // Sort by end-date (newest first) and get the limit
        const recentExperiences = experiences
            .sort((a, b) => b._sortDate - a._sortDate)
            .slice(0, limit)
            .map(({ _sortDate, ...rest }) => rest); // Remove the computed sort field
        
        // console.log(recentExperiences);

        return recentExperiences;
    } catch (error) {
        console.error('Error reading experiences:', error);
        return [];
    }
}