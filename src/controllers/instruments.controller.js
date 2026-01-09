import { getAllInstruments } from '../services/instruments.service.js';
export const fetchInstruments = (req, res) => res.json(getAllInstruments());
