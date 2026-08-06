POSTS = {
    "information-assurance-and-security": {
        "slug": "information-assurance-and-security",

        "title": "Introduction to Information Assurance and Security",

        # Used to preserve the exact two-line design on the homepage card.
        "title_line_1": "Introduction to Information",
        "title_line_2": "Assurance and Security",

        # This exact text appears both on the homepage and article page.
        "description": (
            "Information is one of the most valuable assets in today’s "
            "digital world. This lesson introduces the fundamentals of "
            "Information Assurance and Security."
        ),

        "category": "Lessons",
        "image": "featured-security.jpg",
        "image_alt": "Digital lock representing information security",
        "date": "August 2, 2026",
        "reading_time": "6 min read",

        "learning_outcomes": [
            "Describe the history and core terminology of information assurance and security.",
            "Explain the relationship between Information Assurance and Information Security.",
            "Identify the confidentiality, integrity, and availability principles.",
            "Recognize common threats, vulnerabilities, risks, and security controls.",
            "Explain authentication, authorization, accounting, privacy, and non-repudiation."
        ],

        "sections": [
            {
                "id": "understanding-ias",
                "heading": "Understanding Information Assurance and Security",
                "paragraphs": [
                    (
                        "Almost every organization depends on information to operate. "
                        "Schools maintain student records, hospitals manage medical data, "
                        "businesses process financial transactions, and government agencies "
                        "store sensitive public information. Because these records are now "
                        "commonly created, processed, stored, and transferred through digital "
                        "systems, protecting them has become an essential responsibility."
                    ),
                    (
                        "Information Assurance and Security, commonly shortened to IAS, "
                        "brings together risk management, organizational policies, governance "
                        "frameworks, employee awareness, and technical controls. Its purpose "
                        "is to protect information throughout its lifecycle while keeping it "
                        "confidential, accurate, available, trustworthy, and useful."
                    ),
                    (
                        "Information Security and Information Assurance are closely related, "
                        "but they have different areas of emphasis. Information Security "
                        "focuses on the actual measures used to protect information. These "
                        "measures may include passwords, encryption, firewalls, access "
                        "controls, security policies, employee training, and monitoring tools."
                    ),
                    (
                        "Information Assurance has a broader purpose. It provides confidence "
                        "that the security measures are properly designed, implemented, tested, "
                        "and maintained. A simple comparison is to think of security as the "
                        "locks protecting a building, while assurance is the confidence that "
                        "those locks will work when they are truly needed."
                    ),
                    (
                        "Security is therefore not a single program or product that an "
                        "organization can install once and forget. It is an ongoing and layered "
                        "process. Physical security protects buildings, equipment, and people. "
                        "Communications security protects messages and communication channels. "
                        "Network security protects connections and network services, while "
                        "computer security protects individual devices and systems. "
                        "Information security connects these areas by focusing on the "
                        "information they create, use, and transmit."
                    )
                ],
                "bullets": []
            },

            {
                "id": "security-goals",
                "heading": "The Main Goals of Information Security",
                "paragraphs": [
                    (
                        "The traditional foundation of information security is the CIA triad: "
                        "confidentiality, integrity, and availability. These principles help "
                        "organizations decide what must be protected and which controls are "
                        "appropriate for their information and systems."
                    ),
                    (
                        "Confidentiality means that information should only be disclosed to "
                        "authorized people, processes, or systems. Integrity means that "
                        "information should remain complete, correct, consistent, and protected "
                        "from unauthorized changes. Availability means that authorized users "
                        "should be able to access information and services when they are needed."
                    ),
                    (
                        "Modern security practices also recognize authenticity and "
                        "non-repudiation. Authenticity confirms that a person, message, "
                        "transaction, or piece of information is genuine. Non-repudiation "
                        "provides evidence of an action so that a person cannot falsely deny "
                        "performing it later."
                    ),
                    (
                        "These security goals do not always work together perfectly. Stronger "
                        "confidentiality controls, such as complex encryption or additional "
                        "authentication requirements, may sometimes make information slower or "
                        "more difficult to access. Effective security therefore requires "
                        "balance. Organizations must consider their risks, responsibilities, "
                        "available resources, and actual operational needs."
                    ),
                    (
                        "Information assurance is also not purely technical. People, policies, "
                        "management decisions, legal responsibilities, and organizational "
                        "culture are just as important as hardware and software. A careless or "
                        "untrained user can weaken even the strongest technical system."
                    )
                ],
                "bullets": [
                    "Confidentiality protects information from unauthorized disclosure.",
                    "Integrity protects information from unauthorized alteration or destruction.",
                    "Availability keeps systems and information accessible when required.",
                    "Authenticity confirms that information and identities are genuine.",
                    "Non-repudiation prevents false denial of completed actions."
                ]
            },

            {
                "id": "history",
                "heading": "A Brief History of Information Security",
                "paragraphs": [
                    (
                        "Information security developed through decades of technological "
                        "progress, changing threats, and lessons learned from earlier systems. "
                        "During the 1940s, military organizations used early computers to "
                        "support code-breaking and intelligence work. At that time, protection "
                        "mainly involved guards, locked facilities, identification badges, and "
                        "classified documents."
                    ),
                    (
                        "Networking changed the security landscape during the 1960s. ARPANET, "
                        "an early computer network developed with support from the United States "
                        "Department of Defense, allowed computers to communicate with one "
                        "another. This created new opportunities for sharing information, but "
                        "it also introduced new ways for systems and data to be attacked."
                    ),
                    (
                        "During the 1970s and 1980s, researchers began identifying weaknesses "
                        "such as poor password protection, missing user identification, and "
                        "limited authorization controls. Important developments included the "
                        "Rand Report R-609, the security-oriented design of the MULTICS "
                        "operating system, and the creation of the Computer Emergency Response "
                        "Team in 1988."
                    ),
                    (
                        "The Internet became widely available to businesses and the public "
                        "during the 1990s. Many early Internet services were designed for "
                        "openness and convenience rather than strong security. Several modern "
                        "problems involving email, spam, online trust, and identity can be "
                        "traced to decisions made during this period."
                    ),
                    (
                        "From the 2000s to the present, cybersecurity has become connected to "
                        "business continuity, privacy, national defense, and public safety. "
                        "Modern organizations face ransomware, cloud configuration failures, "
                        "supply-chain compromises, data breaches, and AI-assisted attacks. "
                        "Privacy laws, including the Philippine Data Privacy Act of 2012, also "
                        "influence how organizations collect, store, use, and protect personal "
                        "information."
                    )
                ],
                "bullets": []
            },

            {
                "id": "security-terminology",
                "heading": "Important Security Terminology",
                "paragraphs": [
                    (
                        "Learning the basic terminology of information security helps people "
                        "describe security problems accurately. An asset is anything valuable "
                        "that an organization wants to protect. It may be physical, such as a "
                        "computer, employee, or building, or digital, such as a database, "
                        "website, application, customer record, or business document."
                    ),
                    (
                        "A threat is anything that may cause harm to an asset. Some threats are "
                        "intentional, such as an attacker attempting to steal information. "
                        "Others are accidental or environmental, such as equipment failure, "
                        "human error, fire, flooding, or a power outage."
                    ),
                    (
                        "A threat agent or threat actor is the specific person, event, group, "
                        "or entity responsible for a threat. For example, cybercrime is a broad "
                        "threat category, while a particular criminal group carrying out an "
                        "attack is a threat actor."
                    ),
                    (
                        "A vulnerability is a weakness that may be used to damage or compromise "
                        "an asset. Examples include outdated software, weak passwords, unlocked "
                        "doors, exposed network ports, incorrect permissions, and improperly "
                        "configured cloud services. An exploit is the method or technique used "
                        "to take advantage of that vulnerability."
                    ),
                    (
                        "Risk represents the possibility that an unwanted event will occur and "
                        "cause damage or loss. Organizations normally manage risk according to "
                        "their risk appetite, which describes the amount and type of risk they "
                        "are willing to accept while pursuing their objectives."
                    ),
                    (
                        "A control, safeguard, or countermeasure is something used to reduce "
                        "risk. Controls may be technical, administrative, physical, or "
                        "educational. Firewalls can reduce unauthorized network access. "
                        "Security awareness training can reduce social engineering risk. "
                        "Encryption can protect intercepted information, while backups support "
                        "recovery after data loss."
                    )
                ],
                "bullets": [
                    "Asset: something valuable that needs protection.",
                    "Threat: something capable of causing harm.",
                    "Threat actor: the specific person or entity behind a threat.",
                    "Vulnerability: a weakness that may be attacked.",
                    "Exploit: a method used to take advantage of a vulnerability.",
                    "Risk: the possibility of an unwanted event or loss.",
                    "Control: a safeguard used to reduce risk."
                ]
            },

            {
                "id": "confidentiality",
                "heading": "Confidentiality",
                "paragraphs": [
                    (
                        "Confidentiality protects information from unauthorized access and "
                        "disclosure. It requires an organization to determine who should be "
                        "allowed to view particular information, why access is necessary, and "
                        "under what conditions it should be granted."
                    ),
                    (
                        "Personally Identifiable Information, or PII, includes data that can be "
                        "used to identify a person. Protected Health Information, or PHI, "
                        "includes sensitive medical and health records. Trade secrets, research "
                        "results, business plans, intellectual property, and classified "
                        "documents may also require strong confidentiality protections."
                    ),
                    (
                        "Threats to confidentiality include snooping, dumpster diving, "
                        "eavesdropping, wiretapping, phishing, and other forms of social "
                        "engineering. Organizations can reduce these risks through access "
                        "controls, encryption, document shredding, clean-desk policies, secure "
                        "communication rules, and employee education."
                    ),
                    (
                        "Confidentiality incidents are not always caused by hackers. A simple "
                        "email mistake can expose sensitive information to the wrong recipient. "
                        "The MyHealth Clinic case in the Philippines demonstrated how an "
                        "unintentional disclosure of health information could still become a "
                        "privacy and confidentiality breach. Human accuracy and careful "
                        "procedures are therefore essential parts of information security."
                    )
                ],
                "bullets": [
                    "Use access controls to restrict sensitive records.",
                    "Encrypt information while stored and transmitted.",
                    "Educate users about phishing and social engineering.",
                    "Dispose of documents and storage media securely.",
                    "Verify recipients before sending confidential information."
                ]
            },

            {
                "id": "integrity",
                "heading": "Integrity",
                "paragraphs": [
                    (
                        "Integrity means that information remains complete, accurate, "
                        "consistent, and protected from unauthorized modification. Reliable "
                        "information is necessary for good decisions. A small unauthorized "
                        "change to a financial, medical, or academic record may have serious "
                        "consequences."
                    ),
                    (
                        "Organizations often establish a security baseline that documents the "
                        "approved configuration or expected state of a system. Administrators "
                        "can compare the current state against the baseline to identify "
                        "unexpected changes. When the two no longer match, the integrity of the "
                        "system or information may have been compromised."
                    ),
                    (
                        "Threats to integrity include unauthorized modification, impersonation, "
                        "man-in-the-middle attacks, and replay attacks. The principle of least "
                        "privilege reduces unnecessary access by giving users only the "
                        "permissions required for their responsibilities. Encryption, secure "
                        "authentication, digital signatures, validation controls, and audit "
                        "logs can also help preserve integrity."
                    ),
                    (
                        "Integrity applies to systems and processes as well as individual data. "
                        "A system must maintain a known and dependable operating condition. "
                        "When changes are authorized, they should be documented, reviewed, and "
                        "tested to ensure that they do not introduce new weaknesses."
                    )
                ],
                "bullets": []
            },

            {
                "id": "availability",
                "heading": "Availability",
                "paragraphs": [
                    (
                        "Availability ensures that authorized users can access systems, "
                        "services, and information when they need them. Information cannot "
                        "support an organization if it is protected but permanently "
                        "inaccessible."
                    ),
                    (
                        "Availability does not always mean that every system must operate "
                        "without interruption. The required level depends on the importance of "
                        "the service. A hospital information system may require stronger "
                        "availability protections than a non-essential internal website."
                    ),
                    (
                        "Common threats include denial-of-service attacks, power outages, "
                        "equipment failures, software problems, natural disasters, accidental "
                        "damage, and external service interruptions. Controls may include "
                        "firewalls, backup power supplies, generators, redundant hardware, "
                        "alternative communication links, disaster recovery plans, and secure "
                        "data backups."
                    ),
                    (
                        "Availability planning should begin by identifying critical services "
                        "and understanding how long the organization can operate without them. "
                        "This allows security professionals to create recovery priorities that "
                        "match actual business and mission requirements."
                    )
                ],
                "bullets": [
                    "Maintain reliable and tested backups.",
                    "Use redundant components for critical systems.",
                    "Prepare for power and service interruptions.",
                    "Monitor systems for failure and unusual activity.",
                    "Create and test disaster recovery procedures."
                ]
            },

            {
                "id": "authentication-authorization-accounting",
                "heading": "Authentication, Authorization, and Accounting",
                "paragraphs": [
                    (
                        "Access security is commonly explained through three related processes "
                        "known as AAA: authentication, authorization, and accounting."
                    ),
                    (
                        "Authentication verifies identity. It answers the question, “Are you "
                        "really the person you claim to be?” Authentication factors usually "
                        "belong to three categories: something you know, something you have, "
                        "and something you are."
                    ),
                    (
                        "Something you know may be a password, passphrase, or PIN. Something "
                        "you have may be a security token, memory card, mobile device, or smart "
                        "card. Something you are refers to biometric characteristics such as a "
                        "fingerprint, face, or other measurable physical feature."
                    ),
                    (
                        "Using only one category is called single-factor authentication. "
                        "Multi-factor authentication requires factors from at least two "
                        "different categories. A username and password are not two separate "
                        "authentication factors because they are both knowledge-based."
                    ),
                    (
                        "Authorization determines what an authenticated user is permitted to "
                        "do. A student may be authorized to view course material, while an "
                        "instructor may also be authorized to create, edit, and remove it."
                    ),
                    (
                        "Accounting records user and system activity. Logs may show when a user "
                        "signed in, which resources were accessed, what changes were made, and "
                        "when the session ended. These records support monitoring, investigation, "
                        "accountability, and regulatory compliance."
                    )
                ],
                "bullets": [
                    "Authentication confirms identity.",
                    "Authorization determines allowed actions.",
                    "Accounting records and monitors activity."
                ]
            },

            {
                "id": "privacy-non-repudiation",
                "heading": "Privacy and Non-Repudiation",
                "paragraphs": [
                    (
                        "Privacy is the right of an individual to control how information about "
                        "them is collected, processed, shared, and stored. Security and privacy "
                        "are connected, but they are not identical. Security protects data "
                        "against threats, while privacy focuses on appropriate and lawful use "
                        "of personal information."
                    ),
                    (
                        "Organizations must understand the privacy obligations that apply to "
                        "their activities. Technical protection alone is not enough. They must "
                        "also follow requirements concerning consent, collection, access, "
                        "retention, disclosure, accuracy, and proper use of personal data."
                    ),
                    (
                        "Non-repudiation prevents someone from falsely denying that they "
                        "performed a particular action. It may provide evidence that a person "
                        "approved a document, sent a message, completed an online purchase, or "
                        "accessed a protected system."
                    ),
                    (
                        "Non-repudiation is especially important in electronic transactions "
                        "where participants must trust the record of what occurred. Digital "
                        "signatures, secure audit logs, timestamps, and properly managed "
                        "authentication records can help provide this evidence."
                    )
                ],
                "bullets": []
            },

            {
                "id": "conclusion",
                "heading": "Conclusion",
                "paragraphs": [
                    (
                        "Information Assurance and Security is not limited to installing "
                        "antivirus software or preventing hackers from entering a network. It "
                        "is a continuous discipline that combines technology, policies, risk "
                        "management, employee awareness, governance, and legal responsibility."
                    ),
                    (
                        "Effective security begins by identifying valuable assets, recognizing "
                        "the threats and vulnerabilities that may affect them, assessing the "
                        "resulting risks, and selecting controls that are appropriate for the "
                        "organization."
                    ),
                    (
                        "The most important lesson is that security depends on both people and "
                        "technology. Strong technical controls can still fail when users are "
                        "careless, policies are unclear, or risks are ignored. Understanding "
                        "the foundations of IAS allows learners to make safer decisions and "
                        "contribute to the responsible protection of information in an "
                        "increasingly connected world."
                    )
                ],
                "bullets": []
            }
        ]
    }
}