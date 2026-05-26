import mongoose, {Schema, Document, models, model} from "mongoose";

export interface IInterview extends Document {
    userId: string,
    category: string,
    question: string,
    answer?: string,
    feedback?: string,
    score: number,
    createdAt: Date,
    updatedAt: Date
}

const InterviewSchema = new Schema<IInterview>({
    userId:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        default: ""
    },
    feedback: {
        type: String,
        default: ""
    },
    score: {
        type: Number,
        default: 0
    },
},
 {timestamps: true} 
);

export const Interview = models.Interview ||model<IInterview>("Interview", InterviewSchema);