import { CandidateEntity } from '../entities/CandidateEntity';

export interface VoteResult {
    success: boolean;
    message: string;
}

export class SubmitVoteUseCase {
    async execute(candidateId: string, candidates: CandidateEntity[]): Promise<VoteResult> {
        const candidate = candidates.find(c => c.id === candidateId);
        if (!candidate) {
            return { success: false, message: 'ไม่พบผู้สมัครที่เลือก' };
        }

        console.log('Submitting vote for:', candidate.name);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: `ลงคะแนนให้ ${candidate.name} (หมายเลข ${candidate.number}) สำเร็จ`,
                });
            }, 1000);
        });
    }
}
