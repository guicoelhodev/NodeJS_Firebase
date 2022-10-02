import { Request, Response } from "express";
import { db } from "../../services/firebase.config";

const getBaseRoute = async (request: Request, response: Response) => {
  const usersDoc = await db.collection("Users").get();

  let allUsers = usersDoc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return response.json(allUsers);
};

export { getBaseRoute };
