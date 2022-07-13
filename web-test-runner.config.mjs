import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    rootDir: '.',
    nodeResolve: true,
    preserveSymlinks: true,
    browserLogs: false,
    files: [
        'src/tests/**/*.test.ts'
    ],
    plugins: [
        esbuildPlugin({ ts: true })
    ]
}