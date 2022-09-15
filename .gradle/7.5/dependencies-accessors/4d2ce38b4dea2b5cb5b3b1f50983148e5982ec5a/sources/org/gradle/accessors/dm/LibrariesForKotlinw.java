package org.gradle.accessors.dm;

import org.gradle.api.NonNullApi;
import org.gradle.api.artifacts.MinimalExternalModuleDependency;
import org.gradle.plugin.use.PluginDependency;
import org.gradle.api.artifacts.ExternalModuleDependencyBundle;
import org.gradle.api.artifacts.MutableVersionConstraint;
import org.gradle.api.provider.Provider;
import org.gradle.api.provider.ProviderFactory;
import org.gradle.api.internal.catalog.AbstractExternalDependencyFactory;
import org.gradle.api.internal.catalog.DefaultVersionCatalog;
import java.util.Map;
import javax.inject.Inject;

/**
 * A catalog of dependencies accessible via the `kotlinw` extension.
*/
@NonNullApi
public class LibrariesForKotlinw extends AbstractExternalDependencyFactory {

    private final AbstractExternalDependencyFactory owner = this;
    private final ReactLibraryAccessors laccForReactLibraryAccessors = new ReactLibraryAccessors(owner);
    private final RouterLibraryAccessors laccForRouterLibraryAccessors = new RouterLibraryAccessors(owner);
    private final VersionAccessors vaccForVersionAccessors = new VersionAccessors(providers, config);
    private final BundleAccessors baccForBundleAccessors = new BundleAccessors(providers, config);
    private final PluginAccessors paccForPluginAccessors = new PluginAccessors(providers, config);

    @Inject
    public LibrariesForKotlinw(DefaultVersionCatalog config, ProviderFactory providers) {
        super(config, providers);
    }

        /**
         * Creates a dependency provider for bom (org.jetbrains.kotlin-wrappers:kotlin-wrappers-bom)
         * This dependency was declared in catalog kotlinw.toml
         */
        public Provider<MinimalExternalModuleDependency> getBom() { return create("bom"); }

        /**
         * Creates a dependency provider for css (org.jetbrains.kotlin-wrappers:kotlin-css)
         * This dependency was declared in catalog kotlinw.toml
         */
        public Provider<MinimalExternalModuleDependency> getCss() { return create("css"); }

        /**
         * Creates a dependency provider for extension (org.jetbrains.kotlin-wrappers:kotlin-extensions)
         * This dependency was declared in catalog kotlinw.toml
         */
        public Provider<MinimalExternalModuleDependency> getExtension() { return create("extension"); }

        /**
         * Creates a dependency provider for styled (org.jetbrains.kotlin-wrappers:kotlin-styled)
         * This dependency was declared in catalog kotlinw.toml
         */
        public Provider<MinimalExternalModuleDependency> getStyled() { return create("styled"); }

    /**
     * Returns the group of libraries at react
     */
    public ReactLibraryAccessors getReact() { return laccForReactLibraryAccessors; }

    /**
     * Returns the group of libraries at router
     */
    public RouterLibraryAccessors getRouter() { return laccForRouterLibraryAccessors; }

    /**
     * Returns the group of versions at versions
     */
    public VersionAccessors getVersions() { return vaccForVersionAccessors; }

    /**
     * Returns the group of bundles at bundles
     */
    public BundleAccessors getBundles() { return baccForBundleAccessors; }

    /**
     * Returns the group of plugins at plugins
     */
    public PluginAccessors getPlugins() { return paccForPluginAccessors; }

    public static class ReactLibraryAccessors extends SubDependencyFactory {
        private final ReactDomLibraryAccessors laccForReactDomLibraryAccessors = new ReactDomLibraryAccessors(owner);

        public ReactLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (org.jetbrains.kotlin-wrappers:kotlin-react-core)
             * This dependency was declared in catalog kotlinw.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("react.core"); }

            /**
             * Creates a dependency provider for new (org.jetbrains.kotlin-wrappers:kotlin-react-core)
             * This dependency was declared in catalog kotlinw.toml
             */
            public Provider<MinimalExternalModuleDependency> getNew() { return create("react.new"); }

            /**
             * Creates a dependency provider for old (org.jetbrains.kotlin-wrappers:kotlin-react-legacy)
             * This dependency was declared in catalog kotlinw.toml
             */
            public Provider<MinimalExternalModuleDependency> getOld() { return create("react.old"); }

        /**
         * Returns the group of libraries at react.dom
         */
        public ReactDomLibraryAccessors getDom() { return laccForReactDomLibraryAccessors; }

    }

    public static class ReactDomLibraryAccessors extends SubDependencyFactory {

        public ReactDomLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for new (org.jetbrains.kotlin-wrappers:kotlin-react-dom)
             * This dependency was declared in catalog kotlinw.toml
             */
            public Provider<MinimalExternalModuleDependency> getNew() { return create("react.dom.new"); }

            /**
             * Creates a dependency provider for old (org.jetbrains.kotlin-wrappers:kotlin-react-dom-legacy)
             * This dependency was declared in catalog kotlinw.toml
             */
            public Provider<MinimalExternalModuleDependency> getOld() { return create("react.dom.old"); }

    }

    public static class RouterLibraryAccessors extends SubDependencyFactory {

        public RouterLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for dom (org.jetbrains.kotlin-wrappers:kotlin-react-router-dom)
             * This dependency was declared in catalog kotlinw.toml
             */
            public Provider<MinimalExternalModuleDependency> getDom() { return create("router.dom"); }

    }

    public static class VersionAccessors extends VersionFactory  {

        public VersionAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Returns the version associated to this alias: bom (0.0.1-pre.327-kotlin-1.6.20)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog kotlinw.toml
             */
            public Provider<String> getBom() { return getVersion("bom"); }

    }

    public static class BundleAccessors extends BundleFactory {

        public BundleAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

    }

    public static class PluginAccessors extends PluginFactory {

        public PluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

    }

}
