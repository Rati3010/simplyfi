const tickets = {
  'Paris-Skopje': 'Skopje-Paris',
  'Zurich-Amsterdam': 'Amsterdam-Zurich',
  'Prague-Zurich': 'Zurich-Prague',
  'Barcelona-Berlin': 'Berlin-Barcelona',
  'Kiev-Prague': 'Prague-Kiev',
  'Amsterdam-Barcelona': 'Barcelona-Amsterdam',
  'Berlin-Kiev': 'Kiev-Berlin',
  'Berlin-Amsterdam': 'Amsterdam-Berlin',
};

function findRoute(startCity, tickets) {
  const route = [startCity];

  function dfs(city) {
    if (route.length === Object.keys(tickets).length + 1) {
      return true;
    }

    for (const ticket in tickets) {
      const [from, to] = ticket.split('-');
      if (from === city) {
        delete tickets[ticket];
        route.push(to);
        if (dfs(to)) {
          return true;
        }
        route.pop();
        tickets[ticket] = to + '-' + from;
      }
    }

    return false;
  }

  if (dfs(startCity)) {
    return route;
  } else {
    return null; 
  }
}
const startCity = 'Kiev';
const route = findRoute(startCity, tickets);

if (route) {
  console.log(`The route your son traveled is: ${route.join(' -> ')}`);
} else {
  console.log(`No valid route found starting from ${startCity}`);
}
