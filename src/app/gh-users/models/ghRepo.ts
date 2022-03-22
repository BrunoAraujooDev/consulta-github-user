export interface GhRepo extends Array<GhRepo>{     
    name: string
    description: string
    html_url: string
    forks_count: number
    created_at: string
    updated_at: string
}