import Tome from '@bjornstar/tomes';

const pageState = Tome.conjure({
  active: 0
});

pageState.on('readable', pageState.read);

export default pageState;
