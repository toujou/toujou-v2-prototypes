import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    rootDir: '.',
    nodeResolve: true,
    preserveSymlinks: true,
    browserLogs: false,
    files: [
        'src/themes/**/*.test.ts'
    ],
    plugins: [
        esbuildPlugin({ ts: true })
    ]
}