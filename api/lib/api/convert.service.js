"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewDoc = exports.convert = void 0;
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const libreoffice_convert_1 = __importDefault(require("libreoffice-convert"));
const util_1 = __importDefault(require("util"));
const readFileAsync = (path) => util_1.default.promisify(fs_1.default.readFile)(path, 'utf8');
const writeFileAsync = (path, data) => util_1.default.promisify(fs_1.default.writeFile)(path, data);
const convertAsync = util_1.default.promisify(libreoffice_convert_1.default.convert);
// ------------------------------------------------------------------------------------------
// Universal convert function
// ------------------------------------------------------------------------------------------
const universalConvertFunction = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { file } = req.payload;
    const { to: extOut } = req.query;
    if (!file || !extOut)
        return 'Invalid request';
    const uuid = (0, uuid_1.v4)();
    const outputPath = path_1.default.join(process.cwd(), `/temp/${uuid}.${extOut}`);
    // ----------------------------------------------------------------------------------------
    // Read and convert to given format
    // ----------------------------------------------------------------------------------------
    let convertBuff = yield convertAsync(file, extOut, undefined);
    yield writeFileAsync(outputPath, convertBuff);
    // ----------------------------------------------------------------------------------------
    // Read and convert to given format
    // ----------------------------------------------------------------------------------------
    const outputFile = yield readFileAsync(outputPath);
    // ----------------------------------------------------------------------------------------
    // Remove input and output files
    // ----------------------------------------------------------------------------------------
    fs_1.default.unlinkSync(outputPath);
    return {
        roomName: uuid,
        output: outputFile,
    };
});
// ------------------------------------------------------------------------------------------
// Convert any file ( if possible ) to any file ( if possible )
// ------------------------------------------------------------------------------------------
const convert = (req) => universalConvertFunction(req);
exports.convert = convert;
// ------------------------------------------------------------------------------------------
// Get new doc
// ------------------------------------------------------------------------------------------
const getNewDoc = () => {
    const uuid = (0, uuid_1.v4)();
    return {
        roomName: uuid,
        output: '',
    };
};
exports.getNewDoc = getNewDoc;
