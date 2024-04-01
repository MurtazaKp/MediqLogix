module.exports = {
    async redirects(){
        return [
            {
                source: '/services_hsc.html',
                destination: '/services',
                permanent: true
            },
            {
                source: '/products_platform.html',
                destination: '/software/mediqm-platform',
                permanent: true
            },
            {
                source: '/mymediqm_pa.html',
                destination: '/partners',
                permanent: true
            },
            {
                source: '/services_mqx.html',
                destination: '/services',
                permanent: true
            },
            {
                source: '/mymediqm_ca.html',
                destination: '/careers',
                permanent: true
            },
            {
                source: '/about_mqx.html',
                destination: '/about',
                permanent: true
            },
            {
                source: '/services_qmet.html',
                destination: '/services/quality-management',
                permanent: true
            },
            {
                source: '/mymediqm.html',
                destination: '/contact',
                permanent: true
            },
            {
                source: '/services_hqc.html',
                destination: '/services/hospital-quality',
                permanent: true
            },
            {
                source: '/products_mqx.html',
                destination: '/software/mediqm-platform',
                permanent: true
            },
            {
                source: '/about_cp.html',
                destination: '/company-profile',
                permanent: true
            },
            {
                source: '/contact_mqx.html',
                destination: '/contact',
                permanent: true
            },
            {
                source: '/services.html',
                destination: '/services',
                permanent: true
            },
            {
                source: '/contact.html',
                destination: '/contact',
                permanent: true
            }
        ]
    }
}