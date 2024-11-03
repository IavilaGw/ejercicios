
//1 Create the perfect potions
function createMagicPotion(potions, target) {
let r = [];

for (let i = 0; i < potions.length; i++) {
for (let j = i + 1; j < potions.length; j++) {
if (potions[i] + potions[j] === target) {
r.push([i, j]);
}
}
}

if (r.length === 0) {
return undefined; 
}

let s = r[0];
for (let i = 1; i < r.length; i++) {
if (r[i][1] < s[1]) {
s = r[i];
}
}

return s;
}

//2.Zombie Horde

function battleHorde(zombies, humans) {
var z=0
var h=0
for(let i=0;i<zombies.length;i++){
if(zombies[i]+z>humans[i]+h){
z+=zombies[i]-humans[i]-h
h=0
}else{
h+=humans[i]-zombies[i]-z
z=0
}

}
if(z>h){
return `${z}z`
}else if(h>z){
return `${h}h`
}else{
return 'x'
}
}

//3. Escape the Freddy's Nightmare
function findSafestPath(dream) {
const n = dream.length;
const m = dream[0].length;

const minDanger = Array.from({ length: n }, () => Array(m).fill(Infinity));
minDanger[0][0] = dream[0][0]; 
for (let i = 0; i < n; i++) {
for (let j = 0; j < m; j++) {
if (i + 1 < n) {
minDanger[i + 1][j] = Math.min(minDanger[i + 1][j], minDanger[i][j] + dream[i + 1][j]);
}
if (j + 1 < m) {
minDanger[i][j + 1] = Math.min(minDanger[i][j + 1], minDanger[i][j] + dream[i][j + 1]);
}
}
}

return minDanger[n - 1][m - 1];
}

//4. FInd the killer
function findTheKiller(whisper, suspects) {
const isEndExact = whisper.endsWith('$');
const trimmedWhisper = isEndExact ? whisper.slice(0, -1) : whisper;
const whisperLength = trimmedWhisper.length;
const matches = [];

for (const suspect of suspects) {
const name = suspect.toLowerCase();

if (name.length < whisperLength) continue;
if (isEndExact && name.length !== whisperLength) continue;

let match = true;
for (let i = 0; i < whisperLength; i++) {
if (trimmedWhisper[i] !== '~' && trimmedWhisper[i].toLowerCase() !== name[i]) {
match = false;
break;
}
}
if (match) matches.push(suspect);
}

if (matches.length === 1) return matches[0];
if (matches.length > 1) return matches.join(',');
return '';
}
//5. Terror on Pyramid Head
function escapePyramidHead(room) {
const n = room.length;
const directions = [
[1, 0], 
[-1, 0], 
[0, 1], 
[0, -1], 
];

let start, target;

for (let i = 0; i < n; i++) {
for (let j = 0; j < n; j++) {
if (room[i][j] === '▲') start = [i, j];
if (room[i][j] === 'T') target = [i, j];
}
}

if (!start || !target) return -1;

const queue = [[...start, 0]]; 
const visited = Array.from({ length: n }, () => Array(n).fill(false));
visited[start[0]][start[1]] = true;

while (queue.length > 0) {
const [x, y, steps] = queue.shift();

if (x === target[0] && y === target[1]) return steps;

for (const [dx, dy] of directions) {
const nx = x + dx;
const ny = y + dy;

if (nx >= 0 && ny >= 0 && nx < n && ny < n && room[nx][ny] !== '#' && !visited[nx][ny]) {
visited[nx][ny] = true;
queue.push([nx, ny, steps + 1]);
}
}
}

return -1;
}
