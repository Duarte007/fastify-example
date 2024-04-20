const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("./db-connection"));
fastify.register(require("./routes"));
/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
