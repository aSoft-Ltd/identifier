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
 * A catalog of dependencies accessible via the `asoft` extension.
*/
@NonNullApi
public class LibrariesForAsoft extends AbstractExternalDependencyFactory {

    private final AbstractExternalDependencyFactory owner = this;
    private final ExpectLibraryAccessors laccForExpectLibraryAccessors = new ExpectLibraryAccessors(owner);
    private final FunctionsLibraryAccessors laccForFunctionsLibraryAccessors = new FunctionsLibraryAccessors(owner);
    private final KoncurrentLibraryAccessors laccForKoncurrentLibraryAccessors = new KoncurrentLibraryAccessors(owner);
    private final KotlinxLibraryAccessors laccForKotlinxLibraryAccessors = new KotlinxLibraryAccessors(owner);
    private final LiveLibraryAccessors laccForLiveLibraryAccessors = new LiveLibraryAccessors(owner);
    private final LoggingLibraryAccessors laccForLoggingLibraryAccessors = new LoggingLibraryAccessors(owner);
    private final ViewmodelLibraryAccessors laccForViewmodelLibraryAccessors = new ViewmodelLibraryAccessors(owner);
    private final VersionAccessors vaccForVersionAccessors = new VersionAccessors(providers, config);
    private final BundleAccessors baccForBundleAccessors = new BundleAccessors(providers, config);
    private final PluginAccessors paccForPluginAccessors = new PluginAccessors(providers, config);

    @Inject
    public LibrariesForAsoft(DefaultVersionCatalog config, ProviderFactory providers) {
        super(config, providers);
    }

    /**
     * Returns the group of libraries at expect
     */
    public ExpectLibraryAccessors getExpect() { return laccForExpectLibraryAccessors; }

    /**
     * Returns the group of libraries at functions
     */
    public FunctionsLibraryAccessors getFunctions() { return laccForFunctionsLibraryAccessors; }

    /**
     * Returns the group of libraries at koncurrent
     */
    public KoncurrentLibraryAccessors getKoncurrent() { return laccForKoncurrentLibraryAccessors; }

    /**
     * Returns the group of libraries at kotlinx
     */
    public KotlinxLibraryAccessors getKotlinx() { return laccForKotlinxLibraryAccessors; }

    /**
     * Returns the group of libraries at live
     */
    public LiveLibraryAccessors getLive() { return laccForLiveLibraryAccessors; }

    /**
     * Returns the group of libraries at logging
     */
    public LoggingLibraryAccessors getLogging() { return laccForLoggingLibraryAccessors; }

    /**
     * Returns the group of libraries at viewmodel
     */
    public ViewmodelLibraryAccessors getViewmodel() { return laccForViewmodelLibraryAccessors; }

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

    public static class ExpectLibraryAccessors extends SubDependencyFactory {

        public ExpectLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (tz.co.asoft:expect-core)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("expect.core"); }

            /**
             * Creates a dependency provider for coroutines (tz.co.asoft:expect-coroutines)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCoroutines() { return create("expect.coroutines"); }

    }

    public static class FunctionsLibraryAccessors extends SubDependencyFactory {

        public FunctionsLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (tz.co.asoft:functions-core)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("functions.core"); }

    }

    public static class KoncurrentLibraryAccessors extends SubDependencyFactory {
        private final KoncurrentLaterLibraryAccessors laccForKoncurrentLaterLibraryAccessors = new KoncurrentLaterLibraryAccessors(owner);
        private final KoncurrentPrimitivesLibraryAccessors laccForKoncurrentPrimitivesLibraryAccessors = new KoncurrentPrimitivesLibraryAccessors(owner);

        public KoncurrentLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Returns the group of libraries at koncurrent.later
         */
        public KoncurrentLaterLibraryAccessors getLater() { return laccForKoncurrentLaterLibraryAccessors; }

        /**
         * Returns the group of libraries at koncurrent.primitives
         */
        public KoncurrentPrimitivesLibraryAccessors getPrimitives() { return laccForKoncurrentPrimitivesLibraryAccessors; }

    }

    public static class KoncurrentLaterLibraryAccessors extends SubDependencyFactory {

        public KoncurrentLaterLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (tz.co.asoft:koncurrent-later-core)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("koncurrent.later.core"); }

            /**
             * Creates a dependency provider for coroutines (tz.co.asoft:koncurrent-later-coroutines)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCoroutines() { return create("koncurrent.later.coroutines"); }

            /**
             * Creates a dependency provider for test (tz.co.asoft:koncurrent-later-test)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getTest() { return create("koncurrent.later.test"); }

    }

    public static class KoncurrentPrimitivesLibraryAccessors extends SubDependencyFactory {

        public KoncurrentPrimitivesLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (tz.co.asoft:koncurrent-primitives-core)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("koncurrent.primitives.core"); }

            /**
             * Creates a dependency provider for coroutines (tz.co.asoft:koncurrent-primitives-coroutines)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCoroutines() { return create("koncurrent.primitives.coroutines"); }

            /**
             * Creates a dependency provider for mock (tz.co.asoft:koncurrent-primitives-mock)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getMock() { return create("koncurrent.primitives.mock"); }

    }

    public static class KotlinxLibraryAccessors extends SubDependencyFactory {
        private final KotlinxCollectionsLibraryAccessors laccForKotlinxCollectionsLibraryAccessors = new KotlinxCollectionsLibraryAccessors(owner);

        public KotlinxLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for browser (tz.co.asoft:kotlinx-browser)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getBrowser() { return create("kotlinx.browser"); }

        /**
         * Returns the group of libraries at kotlinx.collections
         */
        public KotlinxCollectionsLibraryAccessors getCollections() { return laccForKotlinxCollectionsLibraryAccessors; }

    }

    public static class KotlinxCollectionsLibraryAccessors extends SubDependencyFactory {

        public KotlinxCollectionsLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for atomic (tz.co.asoft:kotlinx-collections-atomic)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getAtomic() { return create("kotlinx.collections.atomic"); }

            /**
             * Creates a dependency provider for interoperable (tz.co.asoft:kotlinx-collections-interoperable)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getInteroperable() { return create("kotlinx.collections.interoperable"); }

    }

    public static class LiveLibraryAccessors extends SubDependencyFactory {

        public LiveLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for compose (tz.co.asoft:live-compose)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCompose() { return create("live.compose"); }

            /**
             * Creates a dependency provider for core (tz.co.asoft:live-core)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("live.core"); }

            /**
             * Creates a dependency provider for coroutines (tz.co.asoft:live-coroutines)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCoroutines() { return create("live.coroutines"); }

            /**
             * Creates a dependency provider for react (tz.co.asoft:live-react)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getReact() { return create("live.react"); }

            /**
             * Creates a dependency provider for test (tz.co.asoft:live-test)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getTest() { return create("live.test"); }

    }

    public static class LoggingLibraryAccessors extends SubDependencyFactory {
        private final LoggingTestLibraryAccessors laccForLoggingTestLibraryAccessors = new LoggingTestLibraryAccessors(owner);

        public LoggingLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for console (tz.co.asoft:logging-console)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getConsole() { return create("logging.console"); }

        /**
         * Returns the group of libraries at logging.test
         */
        public LoggingTestLibraryAccessors getTest() { return laccForLoggingTestLibraryAccessors; }

    }

    public static class LoggingTestLibraryAccessors extends SubDependencyFactory {

        public LoggingTestLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for android (tz.co.asoft:logging-test-android)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getAndroid() { return create("logging.test.android"); }

    }

    public static class ViewmodelLibraryAccessors extends SubDependencyFactory {

        public ViewmodelLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (tz.co.asoft:viewmodel-core)
             * This dependency was declared in catalog asoft.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("viewmodel.core"); }

    }

    public static class VersionAccessors extends VersionFactory  {

        public VersionAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Returns the version associated to this alias: foundation (1.5.3)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog asoft.toml
             */
            public Provider<String> getFoundation() { return getVersion("foundation"); }

            /**
             * Returns the version associated to this alias: root (2.0.11)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog asoft.toml
             */
            public Provider<String> getRoot() { return getVersion("root"); }

    }

    public static class BundleAccessors extends BundleFactory {

        public BundleAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

    }

    public static class PluginAccessors extends PluginFactory {

        public PluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a plugin provider for applikation to the plugin id 'tz.co.asoft.applikation'
             * This plugin was declared in catalog asoft.toml
             */
            public Provider<PluginDependency> getApplikation() { return createPlugin("applikation"); }

            /**
             * Creates a plugin provider for deploy to the plugin id 'tz.co.asoft.deploy'
             * This plugin was declared in catalog asoft.toml
             */
            public Provider<PluginDependency> getDeploy() { return createPlugin("deploy"); }

            /**
             * Creates a plugin provider for library to the plugin id 'tz.co.asoft.library'
             * This plugin was declared in catalog asoft.toml
             */
            public Provider<PluginDependency> getLibrary() { return createPlugin("library"); }

    }

}
