// eslint-disable-next-line
function filterStatus(items, filter) {
  if (filter === 'all') {
    return items;
  }
  if (filter === 'open') {
    return items.filter((item) => item.status === 'open');
  }
  if (filter === 'done') {
    return items.filter((item) => item.status === 'done');
  }
}

export default filterStatus;
