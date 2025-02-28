import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  signup: defineAction({
    accept: 'form',
    input: z.object({
      firstName: z.string().max(2),
      email: z.string().email(),
    }),
    handler: async (input) => {
      // send an email
      console.log(input);
      // await fetch("api/s");

      // add to an audience

      // do db work
      return 'success';
    },
  }),
};
