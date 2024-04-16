# Nuvo 100 limit test


Run this repo by
- `npm install`
- modifiy `VITE_NUVO_LICENCE_KEY` and `VITE_NUVO_IS_DEV_LICENCE_KEY` within `.env` to a development licence key and true
- `npm run dev`
- run the migration at `localhost:5000`
- modifiy `VITE_NUVO_LICENCE_KEY` and `VITE_NUVO_IS_DEV_LICENCE_KEY` within `.env` to a live licence key and false
- `npm run dev`
- run the migration at `localhost:5000`

The development version will process 100 results at maximum

