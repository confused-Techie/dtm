# Compilation

Using a module bundler like webpack would be a good idea to collapse all these module loads into a single file.

After doing this I can then use something like terser to take the final single file and minify it, allowing the smallest possible footprint on the final file size.

# Documentation

I've tried looking at using a custom template with JSDoc but it's hard than it seem it should be. Alternatively, using ESDocs seems good, except with a much less straight forward config, and plugin configuration.
