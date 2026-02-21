export interface CandidateEntity {
    id: string;
    name: string;
    party: string;
    partyColor: string;
    number: number;
    slogan: string;
    votes: number;
}

export const mockCandidates: CandidateEntity[] = [
    {
        id: 'c1',
        name: 'นายสมชาย ใจดี',
        party: 'พรรคก้าวหน้า',
        partyColor: '#5947ec',
        number: 1,
        slogan: 'พัฒนาชาติ สร้างอนาคต',
        votes: 15234,
    },
    {
        id: 'c2',
        name: 'นางสาวพิมพ์ใจ รักไทย',
        party: 'พรรคประชาธิปไตย',
        partyColor: '#ef4444',
        number: 2,
        slogan: 'เพื่อประชาชน ทุกคน',
        votes: 12876,
    },
    {
        id: 'c3',
        name: 'นายวิชัย สร้างสรรค์',
        party: 'พรรคพลังใหม่',
        partyColor: '#22c55e',
        number: 3,
        slogan: 'เปลี่ยนแปลง เพื่อสิ่งที่ดีกว่า',
        votes: 9541,
    },
    {
        id: 'c4',
        name: 'นางมาลี ศรีสุข',
        party: 'พรรคสามัคคี',
        partyColor: '#f59e0b',
        number: 4,
        slogan: 'สามัคคี คือ พลัง',
        votes: 7823,
    },
    {
        id: 'c5',
        name: 'นายธนกร เจริญ',
        party: 'พรรคเศรษฐกิจไทย',
        partyColor: '#8b5cf6',
        number: 5,
        slogan: 'เศรษฐกิจมั่นคง ประชาชนมั่งคั่ง',
        votes: 6102,
    },
];
