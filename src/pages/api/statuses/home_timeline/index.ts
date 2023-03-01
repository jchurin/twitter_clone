// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

export default (req: NextApiRequest, res: NextApiResponse<string>) => {
  //   res.status(200).json({userName: '@Jchurin'})
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(timeline))
}

const timeline = [
  {
    id: '0',
    avatar: 'https://i.pravatar.cc/150?u=dapelus',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: '1',
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán',
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '3',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '4',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '5',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '6',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '7',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '8',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '9',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '10',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://i.pravatar.cc/150?u=dapeluss',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
]
