import { Request, Response } from "express";
import { db } from "../../services/firebase.config";

interface IRequestParams {
  name: string;
  age: number;
}

export const addUser = async (request: Request, response: Response) => {
  const { name, age } = request.body as IRequestParams;

  if (!name || !age)
    return response.status(401).json({ error: "Invalid Arguments!" });

  return db
    .collection("Users")
    .doc()
    .set({ name, age })
    .then(() => {
      return response.json({ message: "User created successfully" });
    });
};

export const addClinic = async (request: Request, response: Response) => {
  const { clinicName, speciality, id } = request.body;

  if (!id || !clinicName || !speciality)
    return response.status(401).json({ error: "Invalid arguments!" });

  const userRef = db.collection("Users").doc(id);

  let userData = (await userRef.get()).data() as any;

  userRef
    .update({ medical: [...userData.medical, { clinicName, speciality }] })
    .then(() => {
      return response
        .status(200)
        .json({ message: "Created clinic successfully!" });
    })
    .catch(() => response.status(401).json({ error: "Cannot create clinic" }));
};
