export const calculateDiffTimeFromPresent = (moment, mode = 'default') => {
  const presentMoment = new Date();
  const pastMoment = new Date(moment);
  const diffTime = presentMoment - pastMoment;

  const seconds = Math.floor(diffTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // ~30
  const years = Math.floor(days / 365); // ~365
  if (mode === 'returnDiffTime') return diffTime;
  return {
    years,
    months: months % 12,
    days: days % 30,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
};
