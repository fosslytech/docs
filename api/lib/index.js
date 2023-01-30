'use strict';
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
const hapi_1 = __importDefault(require("@hapi/hapi"));
const router_1 = __importDefault(require("./api/router"));
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = hapi_1.default.server({
        port: process.env.PORT || 4000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['http://localhost:3000', 'https://odf-collab.vercel.app', 'https://odfcollab.com'],
                exposedHeaders: [
                    'Content-Type',
                    'Access-Control-Allow-Headers',
                    'Access-Control-Expose-Headers',
                    'Content-Disposition',
                    'Authorization',
                    'X-Requested-With',
                ],
            },
        },
    });
    // Plugins
    yield server.register(require('@hapi/inert'));
    // Routes
    (0, router_1.default)(server);
    yield server.start();
    console.log('Server running on %s', server.info.uri);
});
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();
