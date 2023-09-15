import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const questionRouter = createTRPCRouter({
  questions: publicProcedure.query(({ ctx }) => {
    return ctx.db.question.findMany();
  }),
  createQuestion: publicProcedure
    .input(
      z.object({
        username: z.string(),
        questionContent: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.question.create({
        data: input,
      });
    }),
});
