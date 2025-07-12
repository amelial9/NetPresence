send("Frida script injected into NetEaseMusic");

const modules = Process.enumerateModules();

for (let i = 0; i < modules.length; i++) {
    const mod = modules[i];
    // Only show big/interesting ones, skip tiny system ones
    // if (mod.name.includes("netease") || mod.name.includes("music") || mod.size > 500000) {
        send(`📦 Module: ${mod.name} (base: ${mod.base}, size: ${mod.size})`);
    // }
}

send("✅ Module listing complete");