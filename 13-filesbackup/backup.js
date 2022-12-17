// Score: 220
const getFilesToBackup = (lastBackup = 1, changes = []) => {
  const backupFiles = new Set();

  changes.forEach((file) => {
    if (file[1] > lastBackup) backupFiles.add(file[0]);
  });

  return [...backupFiles].sort((a, b) => a - b);
};

const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

console.log(getFilesToBackup(lastBackup, changes)); // => [ 1, 3 ]
