import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { UserCompany, Product } from '../../db';

const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    let companies;

    const includeOptions = [
      {
        model: Product,
        as: 'products',
      },
    ]

    if (name) {
      companies = await UserCompany.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: [includeOptions], // Cargar productos relacionados
      });
    } else {
      companies = await UserCompany.findAll({
        include: [includeOptions], // Cargar productos relacionados
      });
    }

    return res.status(200).json(companies);
  } catch (error) {
    return res.status(400).send( 'error de catch' );
  }
};

export default getAllCompanies;
