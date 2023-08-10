import { Request, Response } from "express";
import { UserPerson } from "../../db";

const putUserPerson = async (req: Request, res: Response) => {
  try {
    //llega el objeto persona por body
    const person = req.body;
    // busca la persona por id , compara todos los datos y los actualiza
    const updateUserPerson = await UserPerson.update(person, {
      where: { id: person.id },
    });
    if (updateUserPerson[0] === 0) {
      return res.status(400).send("Update failed");
    } else {
      return res.status(200).json("was successfully updated");
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error.");
    }
  }
};

export default putUserPerson;
