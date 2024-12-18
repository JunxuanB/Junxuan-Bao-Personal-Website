import type { APIRoute } from 'astro';
import { JSON_CREDIT, JSON_IMG_AUTHORS } from './credit';

export const POST: APIRoute = ({ params, request, url }) => {
  return new Response(
    JSON.stringify({
      message: 'POST request received',
      data: JSON.parse(request.body?.toString() || '{}'),
      credit: {
        ... JSON_CREDIT,
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}

export const GET: APIRoute = ({ params, request, url }) => {
  return new Response(
    JSON.stringify({
      products: [
        {
          id: 1,
          name: 'Apple',
          discount: 0.1, // 10% off
          price: 1.99,
          stock: 10,
          image: 'https://junxuanb.com/demo-img/apple.jpg',
        },
        {
          id: 2,
          name: 'Banana',
          discount: 0,
          price: 0.99,
          stock: 23,
          image: 'https://junxuanb.com/demo-img/banana.jpg',
        },
        {
          id: 3,
          name: 'Cherry',
          discount: 0.3, // 30% off
          price: 2.99,
          stock: 5,
          image: 'https://junxuanb.com/demo-img/cherry.jpg',
        },
      ],
      credit: {
        ... JSON_CREDIT,
        ... JSON_IMG_AUTHORS,
        imgAuthors: [
          'https://pixabay.com/users/pexels-2286921/',
          'https://pixabay.com/users/jgzelaya-5725431/',
          'https://pixabay.com/users/shutterbug75-2077322/',
        ],
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}