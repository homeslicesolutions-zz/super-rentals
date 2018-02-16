export default function(server) {

  console.log('server', server.db);

  server.loadFixtures('rentals');
}
