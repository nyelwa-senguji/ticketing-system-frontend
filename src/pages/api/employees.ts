import type { NextApiRequest, NextApiResponse } from "next";

type Employees = {
  employee: string;
  username: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(`${process.env.GET_EMPLOYEES_URL}`);
    const employees: Employees[] = await response.json();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error!" });
  }
}
