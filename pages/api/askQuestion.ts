// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';
import admin from "firebase-admin";
import { adminDb } from '../../firebaseAdmin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    //console.log("💲", req.body);
    const {prompt, chatId, model, session} = req.body;

    if(!prompt){
        res.status(400).json({answer: 'Please enter the prompt!'});
        return;
    }

    if(!chatId){
        res.status(400).json({answer: 'Please provide a valid Chat ID!'});
        return;
    }

    // Chat GPT Query
    const response = await query(prompt, chatId, model);

    //console.log("🌛", response);

    const message : Message = {
        text: response || "No answers from ChatGPT!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://res.cloudinary.com/dbzzj25vc/image/upload/v1676779456/ChatGPT/download_g5q1rc.png"
        }
    };

    await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

    res.status(200).json({answer: message.text});
}
