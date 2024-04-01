module.exports = {
    async redirects(){
        return [
            {
                source: '/services_hsc.html',
                destination: '/services',
                permanant: true
            },
            {
                source: '/products_platform.html',
                destination: '/software/mediqm-platform',
                permanant: true
            },
            {
                source: '/mymediqm_pa.html',
                destination: '/partners',
                permanant: true
            },
            {
                source: '/services_mqx.html',
                destination: '/services',
                permanant: true
            },
            {
                source: '/mymediqm_ca.html',
                destination: '/careers',
                permanant: true
            },
            {
                source: '/about_mqx.html',
                destination: '/about',
                permanant: true
            },
            {
                source: '/services_qmet.html',
                destination: '/services/quality-management',
                permanant: true
            },
            {
                source: '/mymediqm.html',
                destination: '/contact',
                permanant: true
            },
            {
                source: '/services_hqc.html',
                destination: '/services/hospital-quality',
                permanant: true
            },
            {
                source: '/products_mqx.html',
                destination: '/software/mediqm-platform',
                permanant: true
            },
            {
                source: '/about_cp.html',
                destination: '/company-profile',
                permanant: true
            },
            {
                source: '/contact_mqx.html',
                destination: '/contact',
                permanant: true
            },
            {
                source: '/services.html',
                destination: '/services',
                permanant: true
            },
            {
                source: '/contact.html',
                destination: '/contact',
                permanant: true
            }
        ]
    }
}