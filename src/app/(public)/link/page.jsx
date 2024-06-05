import ValidateCookies from '@/link/components/ValidateCookies/ValidateCookies'

const pageLink = () => {
//     const router = useRouter();
//   const { security_link_hash, company, collaborator } = router.query;
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <div className="content-page">
                    <ValidateCookies />
                </div>
            </div>
        </div>
    )
}

export default pageLink