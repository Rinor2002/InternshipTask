declare enum Domain
{
    Web,
    Connect,
    Backend
}
interface Intern
{
    name: string,
    age: number,
    skills: string[]
}
interface Junior
{
    name: string,
    age: number,
    skills: string[],
    dateOfPromotion: Date,
    domain: Domain
}
export interface Company
{
    interns: Intern[],
    juniors: Junior[],
    country: string // I just declared it as string, since it kinda makes sense
}